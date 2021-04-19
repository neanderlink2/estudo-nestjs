import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from 'express';
import { QueryFailedError } from "typeorm";

@Catch(QueryFailedError)
export class DatabaseExceptionFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        // const status = exception.getStatus();

        response
            .status(500)
            .json({
                statusCode: 500,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: 'Houve um erro ao acessar o banco de dados.',
                details: exception.message
            });
    }
}
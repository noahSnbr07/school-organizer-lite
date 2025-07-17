import APIResponse from "@/interfaces/api-response";

const apiResponseTemplates = {
    created: (message: string = "resource created"): APIResponse<null> => ({
        success: true,
        status: 201,
        message,
        data: null,
    }),
    badRequest: (data: unknown, message: string = "bad request"): APIResponse<unknown> => ({
        success: false,
        status: 400,
        data: data,
        message,
    }),
    forbidden: (message: string = "forbidden"): APIResponse<null> => ({
        success: false,
        status: 403,
        data: null,
        message,
    }),
    notFound: (message: string = "resource not found"): APIResponse<null> => ({
        success: false,
        status: 404,
        data: null,
        message,
    }),
    internalServerError: (message: string = "internal server error"): APIResponse<null> => ({
        success: false,
        status: 500,
        data: null,
        message,
    }),
    serviceUnavailable: (message: string = "service unavailable"): APIResponse<null> => ({
        success: false,
        status: 503,
        data: null,
        message,
    }),
}

export default apiResponseTemplates;
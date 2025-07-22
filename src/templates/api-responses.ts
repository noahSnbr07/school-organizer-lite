import APIResponse from "@/interfaces/api-response";

const apiResponseTemplates = {

    // return after insert operations
    created: (message: string = "resource created"): APIResponse<null> => ({
        success: true,
        status: 201,
        message,
        data: null,
    }),

    //malformed form fields
    badRequest: (data: unknown, message: string = "bad request"): APIResponse<unknown> => ({
        success: false,
        status: 400,
        data: data,
        message,
    }),

    //authorization through token failed
    forbidden: (message: string = "forbidden"): APIResponse<null> => ({
        success: false,
        status: 403,
        data: null,
        message,
    }),

    //resource not locatable
    notFound: (message: string = "resource not found"): APIResponse<null> => ({
        success: false,
        status: 404,
        data: null,
        message,
    }),

    // error in try-catch block
    internalServerError: (error: Error | string, message: string = "internal server error"): APIResponse<null> => ({
        success: false,
        status: 500,
        data: null,
        message,
        error
    }),

    //temporary unavailable operation/endpoint
    serviceUnavailable: (message: string = "service unavailable"): APIResponse<null> => ({
        success: false,
        status: 503,
        data: null,
        message,
    }),
}

export default apiResponseTemplates;
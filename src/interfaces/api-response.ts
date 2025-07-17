interface APIResponse<DataType> {
    success: boolean;
    message: string;
    status: number;
    data: DataType;
    error?: Error | string;
}

export default APIResponse;
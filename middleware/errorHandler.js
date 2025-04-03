const {constants}=require("../constants")
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; // Fixed property name
    switch(statusCode)
    {
        case (constants.VALIDATION_ERROR):
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case (constants.UNAUTHORIZED):
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;

        case (constants.FORBIDDEEN):
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;

        case (constants.FORBIDDEEN):
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;

        case (constants.SERVER_ERROR):
            res.json({
                title: "Server found",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;
        default:
            console.log("No error found");
            break;
    }
    res.status(statusCode).json({
        message: err.message,
        stack: err.stack, // Fixed stack trace property
    });
};

module.exports = errorHandler;





class ConflictException extends Error   {
    constructor(message="Conflict Exception") {
        super(message);
        this.name = "ConflictException";
        this.status = 409;
    }

}

class BadRequestException extends Error { 
    constructor(message="Bad Request Exception") {
        super(message);
        this.name = "BadRequestException";
        this.status = 400;
    }
} 

class UnauthorizedException extends Error{
    constructor(message="Unauthorized Exception") {
        super(message);
        this.name = "UnauthorizedException";
        this.status = 401;
    }
}


class NotFoundException extends Error {
    constructor(message="Not Found Exception") {
        super(message);
        this.name = "NotFoundException";
        this.status = 404;
    }
}

module.exports = {
    ConflictException,
    BadRequestException,
    UnauthorizedException,
    NotFoundException
}
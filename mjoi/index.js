const Joi = require("joi");

const studentSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
});

const student = {
    name: "nguyen huuhieu",
};

try {
    const result = studentSchema.validate(student);
} catch (error) {
    console.log(error);
}

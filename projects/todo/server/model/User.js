import { model, Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema ({
    username : { type: String, required: true, unique:true },
    password : { type: String, required: true},
})

userSchema.pre("save", async function hashPassword (next) {
    if (!this.isModified('password')) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

export const Usermodel =  model("User", userSchema);
import crypto from "crypto";
import { accountModel } from "../model/accountSchema.js";
export const generateResetPasswordToken = async (userEmail) => {
  try {
    const token = crypto.randomBytes(20).toString("hex");
    const hashToken = crypto.createHash("sha256").update(token).digest("hex");
    const expiry = Date.now() + process.env.RESET_TOKEN_EXPIRE;
    await accountModel.updateOne(
      { email: userEmail },
      { $set: { resetPasswordToken: hashToken, resetPasswordExpire: expiry } }
    );
    console.log(`Reset password token has been generated for ${userEmail}`);
    return hashToken;
  } catch (error) {
    console.log("Error while generating password reset token");
    console.log(error);
  }
};

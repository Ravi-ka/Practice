import { accountModel } from "../model/accountSchema.js";
import { sendPasswordResetEmail } from "../utils/email/sendPasswordResetEmail.js";
import { generateResetPasswordToken } from "../utils/resetPasswordToken.js";

export const resetPassword = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log("Error occurred at resetPassword controller");
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const validateEmail = await accountModel.findOne({ email: email });
    if (!validateEmail) {
      return res.json({ msg: "Please enter a valid email address" });
    }
    const token = await generateResetPasswordToken(validateEmail.email);
    await sendPasswordResetEmail(validateEmail.email, token);
    return res.json({ msg: "forgot password mail has been sent" });
  } catch (error) {
    console.log("Error occurred at resetPassword controller");
    console.log(error);
  }
};

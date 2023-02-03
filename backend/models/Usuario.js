import mongoose from "mongoose";
import bcryp from "bcrypt";

const UsuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    token: {
      type: String,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
UsuarioSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next();
  }
  const salt = await bcryp.genSalt(10);
  this.password = await bcryp.hash(this.password, salt);
});

const Usuario = mongoose.model("Usuario", UsuarioSchema);
export default Usuario;

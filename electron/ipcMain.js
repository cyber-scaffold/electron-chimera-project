import path from "path";
import { ipcMain } from "electron";
import { exec } from "child_process";

const python_runtime_path = path.resolve(__dirname, "../statics/30912/bin/python3");
const python_file_path = path.resolve(__dirname, "../statics/json_demo.py");

ipcMain.handle("test", async (event, args) => {
  const result = await new Promise((resolve, reject) => {
    exec(`${python_runtime_path} ${python_file_path}`, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      };
      if (stderr) {
        return reject(stderr);
      };
      resolve(stdout);
    });
  });
  return result;
});

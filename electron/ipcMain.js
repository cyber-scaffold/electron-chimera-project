import path from "path";
import { ipcMain } from "electron";
import { exec } from "child_process";

const test_file_path = path.resolve(__dirname, "../statics/dist/json_demo");

ipcMain.handle("test", async (event, args) => {
  const result = await new Promise((resolve, reject) => {
    exec(test_file_path, (error, stdout, stderr) => {
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

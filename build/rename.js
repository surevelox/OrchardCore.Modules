const fs = require('fs/promises');
async function renameDir(oldPath, newPath) {
    try {
        await fs.rename(oldPath, newPath);
        console.log(`successfully deleted ${oldPath}`);
    } catch (error) {
        throw error;
    }
}
(async function (path) {
    await renameDir('./docs', './.docs');
    await renameDir('./.wwwroot', './docs');
})();
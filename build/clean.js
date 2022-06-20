const fs = require('fs/promises');
async function deleteDir(path) {
    try {
        await fs.rmdir(path, { recursive: true });
        console.log(`successfully deleted ${path}`);
    } catch (error) {
        throw error;
    }
}
(async function(path) {
    await deleteDir('./.wwwroot');
})();

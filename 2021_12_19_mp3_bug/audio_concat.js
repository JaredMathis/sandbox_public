import audioconcat from 'audioconcat';

export default audio_concat;
function audio_concat(files_input, file_output_name) {
    return new Promise((resolve, reject) => {
        audioconcat(files_input)
            .concat(file_output_name)
            .on('start', function (command) {
            console.log('ffmpeg process started:', command)
            })
            .on('error', function (err, stdout, stderr) {
                reject({err, stdout, stderr})
            })
            .on('end', function (output) {
                resolve(output);
            });
    });
}
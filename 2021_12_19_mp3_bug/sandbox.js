import audio_concat from './audio_concat.js'

let count = 7560

let files =[]
for (var i = 0; i< count; i++) {
    files.push('./noise_30s.mp3')
}

audio_concat(files, `noise_concatenated_${count}.mp3`)
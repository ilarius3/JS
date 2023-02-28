function music(bandName, albumName, songname) {
    let plateRotation = 2.5;
    let songDuration = (albumName.length * bandName.length) * songname.length / 2;
    let rotations = songDuration / plateRotation
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}
music('Rammstein', 'Sehnsucht', 'Engel')

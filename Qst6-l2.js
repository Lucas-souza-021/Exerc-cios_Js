function receberPlaylist() {
    const playlist = []
    let quantidadeMusicas = Number(prompt("Digite a quantidade de musicas na playlist:"))
    for (let i = 0; i < quantidadeMusicas; i++) {
        const musica = {
            nome: prompt(`Digite o titulo da ${i + 1}ª musica:`),
            minutos: Number(prompt(`Digite os minutos da ${i + 1}ª musica:`)),
            segundos: Number(prompt(`Digite os segundos da ${i + 1}ª musica:`))
        }
        playlist.push(musica)
    }
    return playlist
}
function converterParaSegundos(minutos, segundos) {
    let totalSegundos = (minutos * 60) + segundos
    return totalSegundos
}
function calcularTempoPlaylist(playlist) {
    let tempoTotal = 0
    for (let i = 0; i < playlist.length; i++) {
        tempoTotal += converterParaSegundos(
            playlist[i].minutos,
            playlist[i].segundos
        )
    }
    return tempoTotal
}
function mostrarResultado(tempo) {
    alert(`O tempo total da playlist em segundos é de ${tempo} segundos!`)
}
let playlist = receberPlaylist()
let resultado = calcularTempoPlaylist(playlist)
mostrarResultado(resultado)
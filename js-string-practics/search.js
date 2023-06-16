const lyrics = 'thsi is RASEL.I came from rangpur.i complete my bsc in cse from iubat';

const searchString = 'rasel';
//search something in the text
//const doseExit = lyrics.includes('raasel');
//console.log(doseExit);
const lyricsLowerCase = lyrics.toLocaleLowerCase()
const doseExit = lyricsLowerCase.includes(searchString);
//console.log(doseExit);
<script>  
document.write("Hello JavaScript by JavaScript");  
</script> 
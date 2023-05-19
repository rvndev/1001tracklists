import assert from 'node:assert'
import { describe, it } from 'node:test'
import { encode, solveChallenge, type Solution, requestChallenge, sendResponse } from '../src/challenge'

// Plaintext where extracted from the HTML source
describe('Challenge-Response', async () => {
  it('should obfuscate plaintext', () => {
    const plaintext = '8610cd2c'
    const ciphertext = 943893935
    assert.strictEqual(encode(plaintext), ciphertext)
  })

  it('should solve a challenge', async () => {
    const guid = '19306a27d1f57'
    const ts = 1684501507
    const plaintext = '8610cd2c'

    const html = `<!DOCTYPE html> <html prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Article" lang="en-US"><head>  <title>DSalva - DS Sessions 017 2023-05-16</title> <link rel="canonical" href="https://www.1001tracklists.com/tracklist/wc6bcs9/dsalva-ds-sessions-017-2023-05-16.html">  <link rel="apple-touch-icon" sizes="180x180" href="/images/static/apple-touch-icon.png?v=2"> <link rel="icon" type="image/png" sizes="192x192" href="/images/static/favicon-192x192.png?v=2"> <link rel="icon" type="image/png" sizes="128x128" href="/images/static/favicon-128x128.png?v=2"> <link rel="icon" type="image/png" sizes="32x32" href="/images/static/favicon-32x32.png?v=2"> <link rel="icon" type="image/png" sizes="16x16" href="/images/static/favicon-16x16.png?v=2"> <link rel="manifest" href="/images/static/site.webmanifest?v=2"> <link rel="mask-icon" href="/images/static/safari-pinned-tab.svg?v=2" color="#40aef0"> <link rel="shortcut icon" href="/images/static/favicon.ico?v=2">       <script> function cancelBubble(e){var evt=e?e:window.event;evt.stopPropagation?evt.stopPropagation():null;evt.cancelBubble!=null?evt.cancelBubble=true:null;} String.prototype.toLowerCase=function(){var h=0,i,c;for(i=0;i<this.length;i++){c=this.charCodeAt(i);console.log(c);h=((h<<5)-h)+c;console.log(h);};return h}; var debugEnabled = false; function debug() { debugEnabled && Array.from ? Array.from(arguments).forEach((a) => { console.log(a) }) : ''; } if (typeof localStorage != undefined) { if (typeof localStorage != undefined) { function modeIconSwitch(a) { var b = document.getElementById('tS'); if (b) { if (a == 'light') { b.children[0].classList.remove('fa-sun'); b.children[0].classList.add('fa-moon'); b.title = 'switch to dark mode'; } else { b.children[0].classList.add('fa-sun'); b.children[0].classList.remove('fa-moon'); b.title = 'switch to light mode'; } } } function modeSwitcher() { let mode; document.documentElement.getAttribute('data-theme') == 'dark' ? mode = 'light' : mode = 'dark'; document.documentElement.setAttribute('data-theme', mode); localStorage.setItem('theme', mode); modeIconSwitch(mode); document.documentElement.style.colorScheme = mode; } function setStorageValue(el) { el = $(el); if (el.val() == 'del') { localStorage.removeItem(el.attr('name')); } else { localStorage.setItem(el.attr('name'), el.val()); } } let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; if (!currentTheme && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) { currentTheme = 'dark'; } if (currentTheme) { document.documentElement.setAttribute('data-theme', currentTheme); modeIconSwitch(currentTheme); document.documentElement.style.colorScheme = currentTheme; } switch (true) { case localStorage.getItem('appearance_font_size') != null: case localStorage.getItem('appearance_tracklist_hide_artworks') != null: var styleSheet = document.createElement("style"); styleSheet.type = "text/css"; var styles = ''; if (localStorage.getItem('appearance_tracklist_hide_artworks')) { styles += ' .bItm { grid-template-columns:0 40px auto; } .artM { display:none; }'; } if (localStorage.getItem('appearance_font_size')) { styles += ' body { font-size: ' + localStorage.getItem('appearance_font_size') + 'px; }'; } styleSheet.innerText = styles; document.head.appendChild(styleSheet); }
} switch (true) { case localStorage.getItem('appearance_font_size') != null: case localStorage.getItem('appearance_tracklist_hide_artworks') != null: var styleSheet = document.createElement("style"); styleSheet.type = "text/css"; var styles = ''; if (localStorage.getItem('appearance_tracklist_hide_artworks')) { styles += ' .bItm { grid-template-columns:0 40px auto; } .artM { display:none; }'; } if (localStorage.getItem('appearance_font_size')) { styles += ' body { font-size: ' + localStorage.getItem('appearance_font_size') + 'px; }'; } styleSheet.innerText = styles; document.head.appendChild(styleSheet); } } </script> <script>var FqEOmRoaPJ='${plaintext}';</script> </head>
<body id="body"> <a href="//www.1001tracklists.com" id="topLogo"><span title="1001Tracklists Logo"></span></a> <div class="c mt20 flex"> <form action="/tracklist/wc6bcs9/dsalva-ds-sessions-017-2023-05-16.html" method="POST" autocomplete="off"> <h1 class="fontL flex c"> <div class="loader spR"><div></div><div></div><div></div><div></div><div></div></div> Please wait, you will be forwared to the wanted page </h1> <div class="cRow" style="row-gap: 5px"> <h1>If the forwarding does not work please click <input type="submit" class="noBorder blueTxt navBtn" value="here"></h1> <input type="hidden" name="captcha" value="1"> </div> </form>
</div> <script>if (typeof FqEOmRoaPJ != 'undefined') {const f=document.forms[0];let i=document.createElement('input');i.type='hidden';i.name='ts';i.value= ${ts};f.appendChild(i);i=document.createElement('input');i.type='hidden';i.name='bChk';i.value= FqEOmRoaPJ.toLowerCase();f.appendChild(i);document.body.appendChild(f);f.submit();}</script> <noscript> <h1 class="redTxt"><span class="h32">Please enable JavaScript for full functionality.</span></h1> </noscript></body></html>`

    const response = new Response(html, { headers: { 'Set-Cookie': `guid=${guid}; expires=Sun, 27-Aug-2023 13:26:39 GMT; Max-Age=8640000; path=/; domain=1001tracklists.com` } })

    const solution: Solution = {
      guid,
      captcha: 1,
      ts: 1684501507,
      bChk: 943893935
    }
    assert.deepEqual(await solveChallenge(response), solution)
  })

  it('should fetch tracklist', async () => {
    const url = 'https://www.1001tracklists.com/tracklist/1gz59x6t/bicep-the-warehouse-project-rdm-rotterdam-netherlands-2023-04-28.html'
    const trackInList = "Barker - Look How Hard I've Tried"

    const challenge = await requestChallenge(url)
    const solution = await solveChallenge(challenge)
    const res = await sendResponse(url, solution)
    const html = await res.text()

    assert.ok(html.includes(trackInList))
  })
})

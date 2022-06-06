var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation-404'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/668457/404.json'
})
//no result motion
var animation = bodymovin.loadAnimation({
  container: document.getElementById('no-result'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/668457/no-result-motion.json'
})


//alarm motion
var animation = bodymovin.loadAnimation({
  container: document.getElementById('alarm-rj'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1456488/alarm-rj.json'
})

/*copy link*/
function copyToClipboard(text, el) {
  var copyTest = document.queryCommandSupported('copy');
  var elOriginalText = el.attr('data-original-title');

  if (copyTest === true) {
    var copyTextArea = document.createElement("textarea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'Copied!' : 'Whoops, not copied!';
      el.attr('data-original-title', msg).tooltip('show');
    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(copyTextArea);
    el.attr('data-original-title', elOriginalText);
  } else {
    // Fallback if browser doesn't support .execCommand('copy')
    window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
  }
}

$(document).ready(function() {
  // Initialize
  // ---------------------------------------------------------------------

  // Tooltips
  // Requires Bootstrap 3 for functionality
  $('.js-tooltip').tooltip();

  // Copy to clipboard
  // Grab any text in the attribute 'data-copy' and pass it to the 
  // copy function
  $('.js-copy').click(function() {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
  });
});

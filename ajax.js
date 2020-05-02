var xhttp = newXMLHttpRequest()
xhttp.onreadystatechange = funtion(){
  if(this.readystate == 4 & this.status == 200){
    const data = JSON.parse(this.responseText)
    console.log(data)

    var ul = document.CreateElement('ul')
    ul.setAttribute = ('class', 'notes')
    data.forEach(function(note){
      var li = document.CreateElement('li')

      ul.appendChild(li)
      li.appendChild(document.createTextNode(note.content))

    })
    document.getElementById('notes').appendChild(ul)

  }
}
xhttp.open('GET', '/data.json', true)
xhttp.send()

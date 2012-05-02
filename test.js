

var data, template, html;

	data = {
			name:  "Some Text Sites", 
  		sites: ["Nettuts+", "Psdtuts+", "Mobiletuts+"],
  		s_test: ["Nettuts+1", "Psdtuts+1", "Mobiletuts+1"]
};


																																						//creating a block

//template="<h3>{{name}}</h3><ul>{{#sites}}<li>{{.}}</li>{{/sites}}</ul>"; 
template= "<ul>
{{#sites}}<li>{{.}}</li>{{/sites}}</ul>"


html = Mustache.to_html(template, data);

document.write(html);
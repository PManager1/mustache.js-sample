

 var data, template, html;

	data = {
			name:  "Some Text Sites", 
  		sites: ["Nettuts+", "Psdtuts+", "Mobiletuts+"]
};

																																						//creating a block
//template="<h3>{{name}}</h3><ul>{{#sites}}<li>{{.}}</li>{{/sites}}</ul>"; 

template="<h3>{{name}}</h3><ul>{{#sites}}<li>{{.}}</li>{{/sites}}</ul>"; 
																																						//Iterating back over an array
																																						// name of block = {#sites},         {{/name_of_key}}  // here the iterator is {{. = dot }}
																																						//<ul> {{#sites}} <li> {{.}} </li>  {{/sites}} </ul> ";


html = Mustache.to_html(template, data);

document.write(html);
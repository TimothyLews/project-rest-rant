const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
<<<<<<< HEAD
                <link rel="stylesheet" href="public/style.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
=======
                <link 
                rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
                />
                <link rel="stylesheet" href="/css/style.css" />


>>>>>>> 0880c77cc9ca98cb87fb54fb34d2bce78b5ae10a
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
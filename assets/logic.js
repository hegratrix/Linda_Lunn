  var config = {
    apiKey: "AIzaSyBqbPAsKzmrPxv-Vp6KN6qVfb0oe2rS9iU",
    authDomain: "linda-lunn2018.firebaseapp.com",
    databaseURL: "https://linda-lunn2018.firebaseio.com",
    projectId: "linda-lunn2018",
    storageBucket: "",
    messagingSenderId: "825496083454"
  };
  firebase.initializeApp(config);

    let db = firebase.database()
    let userRef = db.ref('users')

// contact form
$(document).ready( function () {
    $('#submit').click( function (event) {
        event.preventDefault()
        const name = $('#name').val()
        const email = $('#email').val()
        const message = $('#message').val()
        const title = ''
        const phone = ''
        let status = true
        let time = moment().format("MMM/DD/YYYY H:mm")

        if (email.includes('@') && email.includes('.')) {
        } else {
            $('#email-label').css({'color': "red", "font-weight": "bold"})
            $('#email-label').text('Please enter your email.')
            status = false
        }
        if (name.length < 2) {
            $('#name-label').css({'color': "red", "font-weight": "bold"})
            $('#name-label').text('Please enter your name.')
            status = false
        }
        if (message.length < 2) {
            $('#message-label').css({'color': "red", "font-weight": "bold"})
            $('#message-label').text('Please enter a message.')
            status = false
        }
        if (status === true) {
            addUser('comment', time, name, title, email, phone, message)
            $('.contact-container').html('Thank you for your message!')
            $('.contact-container').css({'color':'white', 'text-align':'center', 'font-size': '50px', 'height':'300px', 'padding-top': '100px'})
        }
    })
})

// yard sign
$(document).ready( function () {
    $('#submit2').click( function (event) {
        console.log('yardsign')
        event.preventDefault()
        const name = $('#name').val()
        const email = $('#email').val()
        const phone = $('#phone').val()
        const title = ''
        const message = ''
        let status = true
        let time = moment().format("MMM/DD/YYYY H:mm")

        if (email.includes('@') && email.includes('.')) {
        } else {
            $('#email-label2').css({'color': "red", "font-weight": "bold"})
            $('#email-label2').text('Please enter your email.')
            status = false
        }
        if (name.length < 2) {
            $('#name-label2').css({'color': "red", "font-weight": "bold"})
            $('#name-label2').text('Please enter your name.')
            status = false
        }
        if (phone.length < 7) {
            $('#phone-label').css({'color': "red", "font-weight": "bold"})
            $('#phone-label').text('Please enter a phone number.')
            status = false
        }
        if (status === true) {
            addUser('yard sign', time, name, email, phone, message)
            $('.contact-container').html('Thanks for your interest in a yard sign.  I will contact you soon.')
            $('.contact-container').css({'color':'white', 'text-align':'center', 'font-size': '40px', 'height':'300px', 'padding-top': '100px'})
        }
    })
})

// endorsement
$(document).ready( function () {
    $('#submit3').click( function (event) {
        event.preventDefault()
        const name = $('#name').val()
        const email = $('#email').val()
        const phone = $('#phone').val()
        const message = $('#message').val()
        const title = $('#title').val()
        let status = true
        let time = moment().format("MMM/DD/YYYY H:mm")

        if (email.includes('@') && email.includes('.')) {
        } else {
            $('#email-label2').css({'color': "red", "font-weight": "bold"})
            $('#email-label2').text('Please enter your email.')
            status = false
        }
        if (name.length < 2) {
            $('#name-label2').css({'color': "red", "font-weight": "bold"})
            $('#name-label2').text('Please enter your name.')
            status = false
        }

        if (status === true) {
            addUser('Endorsement', time, name, title, email, phone, message)
            $('.contact-container').html('Thanks for your endorsement!  I will contact you soon.')
            $('.contact-container').css({'color':'white', 'text-align':'center', 'font-size': '40px', 'height':'300px', 'padding-top': '100px'})
        }
    })
})

// $(document).ready( function () {
//     $('#submit4').click( function (event) {
//         event.preventDefault()
//         const name = $('#name').val()
//         const email = $('#email').val()
//         const phone = $('#phone').val()
//         const message = ''
//         let status = true
//         let time = moment().format("MMM/DD/YYYY H:mm")

//         if (email.includes('@') && email.includes('.')) {
//         } else {
//             $('#email-label2').css({'color': "red", "font-weight": "bold"})
//             $('#email-label2').text('Please enter your email.')
//             status = false
//         }
//         if (name.length < 2) {
//             $('#name-label2').css({'color': "red", "font-weight": "bold"})
//             $('#name-label2').text('Please enter your name.')
//             status = false
//         }

//         if (status === true) {
//             addUser('Donate', time, name, title, email, phone, message)
//             $('.contact-container').html('Thank you!')
//             $('.contact-container').css({'color':'white', 'text-align':'center', 'font-size': '40px', 'height':'300px', 'padding-top': '100px'})
//         }
//     })
// })           status = false
//         }

//         if (status === true) {
//             addUser('Donate', time, name, title, email, phone, message)
//             $('.contact-container').html('Thank you!')
//             $('.contact-container').css({'color':'white', 'text-align':'center', 'font-size': '40px', 'height':'300px', 'padding-top': '100px'})
//         }
//     })
// })

function addUser (type, time, name, title, email, phone, message) {
    userRef.push({
        type,
        time,
        name,
        title,
        email,
        phone,
        message
    })
}

$(document).ready( function () {
    for (i = 0; i < slides.length; i++) {
        if (i === 0) {
            $('.carousel-inner').html (`
                <div class="carousel-item active">
                    <img class="d-block w-100" src="${slides[i].image}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class ="pic-header">${slides[i].heading}</h5>
                        <p class ="pic-p">${slides[i].p}</p>
                    </div>
                </div>
            `)
            console.log(i)
        } else {
            $('.carousel-inner').append (`
            <div class="carousel-item">
                <img class="d-block w-100" src="${slides[i].image}">
                <div class="carousel-caption d-none d-md-block">
                    <h5 class ="pic-header">${slides[i].heading}</h5>
                    <p class ="pic-p">${slides[i].p}</p>
                </div>
            </div>
            `)
            console.log(i)
        }
    }
})


// Fungsi untuk mengirim permintaan AJAX ke server
function sendRequest(url, method, data) {
    return $.ajax({
        url: url,
        method: method,
        data: JSON.stringify(data),
        contentType: 'application/json',
        dataType: 'json'
    });
}

// Fungsi untuk menampilkan pesan kesalahan
function showError(message) {
    $('#error-message').text(message).show();
}

// Fungsi untuk menampilkan pesan sukses
function showSuccess(message) {
    $('#success-message').text(message).show();
}

// Event handler saat tombol sign up ditekan
$('#signup-form').submit(function (event) {
    event.preventDefault();

    // Mengambil data dari formulir
    const username = $('#username').val();
    const email = $('#email').val();
    const password = $('#password').val();

    // Mengirim permintaan sign up ke server
    sendRequest('http://localhost:3000/signup', 'POST', { username, email, password })
        .done(function (response) {
            // Menampilkan pesan sukses jika pendaftaran berhasil
            showSuccess(response.message);
            // Mengarahkan pengguna ke halaman sign-in
            window.location.href = 'signin.html';
        })

        .fail(function (xhr, status, error) {
            // Menampilkan pesan kesalahan jika pendaftaran gagal
            showError(xhr.responseJSON.message);
        });
});

// Event handler saat tombol sign in ditekan
$('#signin-form').submit(function (event) {
    event.preventDefault();

    // Mengambil data dari formulir
    const email = $('#floatingInput').val();
    const password = $('#floatingPassword').val();

    // Mengirim permintaan sign in ke server
    sendRequest('http://localhost:3000/signin', 'POST', { email, password })
        .done(function (response) {
            // Menampilkan pesan sukses jika masuk berhasil
            showSuccess(response.message);
            // Mengarahkan pengguna ke halaman index
            window.location.href = '/index.html';

        })
        .fail(function (xhr, status, error) {
            // Menampilkan pesan kesalahan jika masuk gagal
            showError(xhr.responseJSON.message);
        });
});

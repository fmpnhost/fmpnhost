document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const sheetID = '1hkf12P2CVYFKjtwFI-c3NnvcZ6P7xNh3KPCv2drl3Io';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1!A1:V?key=AIzaSyAOD9KUPAFZc7xlyG1KXfy01u6u_8Wtb7Q`;

    console.log('Fetching URL:', url);

    fetch(url)
        .then(response => {
            console.log('Response received:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            const rows = data.values;
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            console.log('URL parameter id:', id);
            const rowIndex = rows.findIndex(row => row[0] == id); // Encuentra el índice de la fila con el id correcto
            console.log('Row index found:', rowIndex);

            if (rowIndex !== -1 && rowIndex < rows.length) {
                const headers = rows[0]; // La primera fila contiene los encabezados
                const row = rows[rowIndex]; // Obtén la fila correspondiente al id
                console.log('Headers:', headers);
                console.log('Row data:', row);
                
                // Asignar valores a los campos correspondientes
                document.getElementById('bolDate').innerText = row[headers.indexOf('Date')];
                document.getElementById('bolNum').innerText = row[headers.indexOf('Bol No')];
                document.getElementById('ticketNum').innerText = row[headers.indexOf('TMF Ticket No')];
                document.getElementById('finalLBS').innerText = row[headers.indexOf('Net Weight LB')];
                document.getElementById('finalKG').innerText = row[headers.indexOf('Net Weight KG')];
                document.getElementById('timeIn').innerText = row[headers.indexOf('Time In')];
                document.getElementById('timeOut').innerText = row[headers.indexOf('Time Out')];
                document.getElementById('totalPumpTime').innerText = row[headers.indexOf('Total Pump Time')];
                document.getElementById('trailerNum').innerText = row[headers.indexOf('Trailer Number')];
                document.getElementById('trailerLicense').innerText = row[headers.indexOf('Trailer License')];
                document.getElementById('transporter').innerText = row[headers.indexOf('Transport Company Name')];
                document.getElementById('driverName').innerText = row[headers.indexOf('Driver Name')];
                document.getElementById('picName').innerText = row[headers.indexOf('PIC Loader')];
                document.getElementById('seal1').innerText = row[headers.indexOf('Seal Number1')];
                document.getElementById('seal2').innerText = row[headers.indexOf('Seal Number 2')];
                document.getElementById('charterRefNum').innerText = row[headers.indexOf('Charter Ref No')];
                document.getElementById('itnNum').innerText = row[headers.indexOf('ITN No')];
                document.getElementById('grossVol').innerText = row[headers.indexOf('Gross')];
                document.getElementById('netVol').innerText = row[headers.indexOf('Net')];
                document.getElementById('temperature').innerText = row[headers.indexOf('Temp')];
                
                // Asignar el valor "G-LEW B" directamente
                document.querySelector('.text-end.text-danger strong').innerText = 'G-LEW B';

                console.log('Data set in the HTML');
            } else {
                console.error('Row index not found or out of bounds');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure


function clicked() {
    const text = document.getElementById("textArea").value;
    const textArray = text.split('\n')
    console.log(textArray)

    for (const row of textArray) {
        [first, last] = row.split('_')
        last=last.toLowerCase()
        const newName = first + last[0].toUpperCase() + last.slice(1)
        console.log(`${newName.padEnd(20, ' ')}✔️`)

    }
}


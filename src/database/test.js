const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: '-22.0994155',
        lng: '-51.4299687',
        name: 'Lar dos Meninos',
        about: '996886995',
        whatsapp: 'Presta assistência a crianças de 6 à 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.',
        images: [
            'https://images.unsplash.com/photo-1601180964401-6e474136af83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        ].toString(),
        instructions: 'Venha como se sentir à vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitas Das 8h às 18h',
        open_on_weekends: '1'
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // deletar dado da tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id = "2"'))
})
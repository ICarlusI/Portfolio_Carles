    export default{
    name: 'temoignage',
    title: 'Temoignage ',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nom ',
            type: 'string'

        },
        {
            name: 'entreprise',
            title: 'Entreprise ',
            type: 'string'

        },
        {
            name: 'imageurl',
            title: 'ImgURL ',
            type: 'image',
            options: {
                hotspot: true, 
            }


        },
        {
            name: 'temoignages',
            title: 'Témoinages ',
            type: 'string'

        },
        
        


    ]



}
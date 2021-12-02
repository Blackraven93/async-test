export const getAPI = (req, res) => {
    return res.status(200).json({
        user: 'raven',
        type: 'bird',
        color: {
            wings: ['black', 'white', 'pink', 'blue']
        },
        canFly: true,
        avgTall : 70,
        avgWeight: 12
    })
}
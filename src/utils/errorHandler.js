exports.notFound = (req,res, next) => {
    const err = new Error('404 - stronie nie została odnaleziona')
    next(err)
}
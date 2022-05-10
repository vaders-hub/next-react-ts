const myCustomErrorFunction = (err: any) => {
  if (err.code === 'MISSING_TRANSLATION') {
    return
  }
  throw err
}

export { myCustomErrorFunction }

export default () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          title: 'This is title.',
          content: 'This is content.',
          author: 'tom',
          url: 'https://abc.com'
        }),
      2000
    )
  })
}

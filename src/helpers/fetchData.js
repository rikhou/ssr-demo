export default () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          title: 'This is title.',
          content: 'This is content.',
          author: 'test',
          url: 'http://xxxx'
        }),
      2000
    )
  })
}

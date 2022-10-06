const params = new Proxy(new URLSearchParams(window.location.search) as any, {
  get: (searchParams, prop) => searchParams.get(prop),
})

export default params

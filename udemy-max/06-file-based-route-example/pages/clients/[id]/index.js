function ClientsProjectPage() {
  const router = useRouter();
  console.log(router.query)
  function loadProjectHandler() {
    router.push('/clients/max/projects');
    //router.replace('/clients/max/projects');
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' }
    })
  }
  return <div>
    <h1>The Project of a given client</h1>
    <button onClick={loadProjectHandler}>Load Project A</button>
  </div>
}

export default ClientsProjectPage;
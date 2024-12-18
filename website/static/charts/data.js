window.BENCHMARK_DATA = {
  "lastUpdate": 1734548587293,
  "repoUrl": "https://github.com/microsoft/garnet",
  "entries": {
    "Cluster.ClusterMigrate (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "100c7d90caa8357d75a9f0c1e99fc21f14a31e39",
          "message": "Fixed so all BDN are based on Bytes (had one using KB). Updated Operations.ObjectOperations expected values to be in bytes. Also, noticed Operations.CustomOperations was accidentally removed from BDN tests so put that back. (#887)",
          "timestamp": "2024-12-18T11:00:06-08:00",
          "tree_id": "e9c3d6924c8d99786f0419adfd3d73d9710abab7",
          "url": "https://github.com/microsoft/garnet/commit/100c7d90caa8357d75a9f0c1e99fc21f14a31e39"
        },
        "date": 1734548585151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37204.26223754883,
            "unit": "ns",
            "range": "± 42.50628602366016"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 37195.21051534017,
            "unit": "ns",
            "range": "± 35.85922684919816"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32615.426999605617,
            "unit": "ns",
            "range": "± 41.35196247769095"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31502.4585164388,
            "unit": "ns",
            "range": "± 30.872944123482593"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1728940035774,
  "repoUrl": "https://github.com/microsoft/garnet",
  "entries": {
    "BDNBenchmark - Resp.RespTsavoriteStress (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940019657,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Get",
            "value": 20549.927168782553,
            "unit": "ns",
            "range": "± 109.87893011228456"
          },
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Set",
            "value": 18653.09128417969,
            "unit": "ns",
            "range": "± 144.0353968048221"
          },
          {
            "name": "BDN.benchmark.Resp.RespTsavoriteStress.Incr",
            "value": 27173.29769592285,
            "unit": "ns",
            "range": "± 252.87662109256993"
          }
        ]
      }
    ],
    "BDNBenchmark - Resp.RespLuaStress (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940031554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress1",
            "value": 177.15753909746806,
            "unit": "ns",
            "range": "± 1.6051575487525471"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress2",
            "value": 291.8813014348348,
            "unit": "ns",
            "range": "± 2.742004558566918"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress3",
            "value": 1340.5866329193116,
            "unit": "ns",
            "range": "± 4.904321060264595"
          },
          {
            "name": "BDN.benchmark.Resp.RespLuaStress.BasicLuaStress4",
            "value": 2771.392560068766,
            "unit": "ns",
            "range": "± 21.82630707291076"
          }
        ]
      }
    ],
    "BDNBenchmark - Cluster.RespClusterBench (os ubuntu-latest, framework net8.0, configuration Release)": [
      {
        "commit": {
          "author": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "committer": {
            "name": "darrenge",
            "username": "darrenge",
            "email": "darrenge@microsoft.com"
          },
          "id": "68d0972ccb4255528d1174fb769ee0270d599155",
          "message": "Set up the commit comment for BDN as well as summary to show current vs previous BDN perf numbers",
          "timestamp": "2024-10-14T21:02:46Z",
          "url": "https://github.com/microsoft/garnet/commit/68d0972ccb4255528d1174fb769ee0270d599155"
        },
        "date": 1728940031819,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.Get",
            "value": 28835.88067626953,
            "unit": "ns",
            "range": "± 105.32861692336571"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.Set",
            "value": 25364.82776489258,
            "unit": "ns",
            "range": "± 115.22972182344766"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.MGet",
            "value": 21044.283978975734,
            "unit": "ns",
            "range": "± 21.675538056731288"
          },
          {
            "name": "BDN.benchmark.Cluster.RespClusterBench.MSet",
            "value": 18682.342987060547,
            "unit": "ns",
            "range": "± 141.9175795358318"
          }
        ]
      }
    ]
  }
}
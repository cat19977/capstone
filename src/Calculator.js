import PD from "probability-distributions";

const init_rfcw = [
  [1.965613327, 5.89683998],
  [2.245376947, 6.070833969],
  [2.971255193, 6.313917285],
  [3.2662386, 6.340345518],
  [3.560465744, 6.329716879],
  [3.995425495, 6.249255261],
  [4.137576093, 6.20636414],
  [4.277836035, 6.155910391],
  [4.551549554, 6.033449409],
  [4.814297264, 5.884141101],
];

const init_rld = [
  [4.137576093, 6.20636414],
  [4.415921721, 6.098177615],
  [4.814297264, 5.884141101],
  [5.063810378, 5.710254256],
  [5.408302204, 5.408302204],
  [5.710254256, 5.063810378],
  [5.884141101, 4.814297264],
  [6.033449409, 4.551549554],
  [6.155910391, 4.277836035],
  [6.20636414, 4.137576093],
];

const init_pld = [
  [0.7539702373, 4.272498011],
  [1.192117318, 5.082184356],
  [1.829134698, 5.792259878],
  [2.245376947, 6.070833969],
  [2.971255193, 6.313917285],
  [3.706586722, 6.311215229],
  [4.551549554, 6.033449409],
  [5.063810378, 5.710254256],
  [5.710254256, 5.063810378],
  [5.962009371, 4.684435934],
];

const init_pfcw = [
  [0.7539702373, 4.272498011],
  [1.192117318, 5.082184356],
  [1.564401799, 5.546515468],
  [2.104455276, 5.989603477],
  [2.971255193, 6.313917285],
  [3.560465744, 6.329716879],
  [4.277836035, 6.155910391],
  [4.814297264, 5.884141101],
  [5.710254256, 5.063810378],
  [6.098177615, 4.415921721],
];

export default function calc_data(ND15,NC15) {
  var N = 1000;
  var dict = { lsl: [], lsf: [], pcl: [], pcf: [] };
  for (var i = 0; i < 10; i++) {
    var res_pld = PD.rbeta(N, init_pld[i][0], init_pld[i][1]);
    var res_pfcw = PD.rbeta(N, init_pfcw[i][0], init_pfcw[i][1]);
    var res_rld = PD.rbeta(N, init_rld[i][0], init_rld[i][1]);
    var res_rfcw = PD.rbeta(N, init_rfcw[i][0], init_rfcw[i][1]);

    var lsfa = res_pfcw.map(function (x) {
      return x * ND15;
    });
    var lsfb = res_rfcw.map(function (x) {
      return 1 - x;
    });

    var lsla = res_pld.map(function (x) {
      return x * ND15;
    });
    var lslb = res_rld.map(function (x) {
      return 1 - x;
    });

    var pfca = res_pfcw.map(function (x) {
      return x * NC15;
    });
    var pfcb = res_rfcw.map(function (x) {
      return 1 - x;
    });

    var pcla = res_pld.map(function (x) {
      return x * NC15;
    });
    var pclb = res_rld.map(function (x) {
      return 1 - x;
    });

    var lsf_1 = [];
    var lsl_1 = [];
    var pfc_1 = [];
    var pcl_1 = [];

    for (var k = 0; k < N; k++) {
      lsf_1.push(lsfa[k] * lsfb[k]);
      lsl_1.push(lsla[k] * lslb[k]);
      pfc_1.push(pfca[k] * pfcb[k]);
      pcl_1.push(pcla[k] * pclb[k]);
    }
    dict["lsf"].push(lsf_1);
    dict["lsl"].push(lsl_1);
    dict["pcf"].push(pfc_1);
    dict["pcl"].push(pcl_1);
  }
  return dict;
};


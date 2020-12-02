import PD from "probability-distributions";
//mu_eld = mean efficacy lane departure
//mu_pld = mean prevalence lane departure
//mu_pfc = mean prevalence forward collision
//mu_efc = mean efficacy forward collision

//var_eld = variance efficacy lane departure
//var_pld = variance prevalence lane departure
//var_pfc = variance prevalence forward collision
//var_efc = variance efficacy forward collision

function alpha_beta(mu1, var1){
    var alpha1 = mu1**2 * ((1 - mu1) / var1**2 - 1 / mu1);
    var beta1 = alpha1 * (1 / mu1 - 1);
    return {'alpha': alpha1, 'beta':beta1}
    }

//enter NCND = Number crash or number death
//res_p = prevalence pararms
//res_e = efficacy params
function initial_calcs(NCD, res_p, res_e){
    var a = res_p.map(function (x) {return x * NCD;});
    var b = res_e.map(function (x) {return 1 - x;});
    return {'a':a, 'b':b}
}

//gets distribution given all parameters for one year 
export default function calc_data1(ND15,NC15, param_dict) {
    const N = 1000; //number monte carlo simulations
    var res_dict = {'lsl':[], 'lsf':[], 'pcf':[], 'pcl':[]}
    //efficacy forward collision
    const init_efc =  alpha_beta(param_dict['mu_efc'], param_dict['var_efc']);
    //efficacy lane departure
    const init_eld =  alpha_beta(param_dict['mu_eld'], param_dict['var_eld']);
    //prevalence lane departure
    const init_pld = alpha_beta(param_dict['mu_pld'], param_dict['var_pld']);
    //prevalence forward collision
    const init_pfc = alpha_beta(param_dict['mu_pfc'], param_dict['var_pfc']);
        
    //forward collision:
    var dist_pfc = PD.rbeta(N, init_pfc[0], init_pfc[1]); //prevalence distribution
    var dist_efc = PD.rbeta(N, init_efc[0], init_efc[1]); //efficacy distribution
    //do initial calcs 
    var lsfc_params = initial_calcs(ND15, dist_pfc, dist_efc) //lives saved
    var cpfc_params = initial_calcs(NC15, dist_pfc, dist_efc) //crashed prevented
    
    //lane departure:
    var dist_pld = PD.rbeta(N, init_pld[0], init_pld[1]); //prevalence distribution
    var dist_eld = PD.rbeta(N, init_eld[0], init_eld[1]); //efficacy distribution
    //do initial calcs 
    var lsld_params = initial_calcs(ND15, dist_pld, dist_eld) //lives saved
    var cpld_params = initial_calcs(NC15, dist_pld, dist_eld) //crashed prevented
    
    for (var k = 0; k < N; k++) {
        res_dict["lsf"].push(lsfc_params['a'][k] * lsfc_params['b'][k]);
        res_dict["lsl"].push(lsld_params['a'][k] * lsld_params['b'][k]);
        res_dict["pcf"].push(cpfc_params['a'][k] * cpfc_params['b'][k]);
        res_dict["pcl"].push(cpld_params['a'][k] * cpld_params['b'][k]);
    }
    return res_dict;
}
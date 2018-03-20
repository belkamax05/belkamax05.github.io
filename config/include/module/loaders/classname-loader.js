//replace .module {} by .<unique-id> and export variable as className
module.exports = function(source) {
    const res = "$current-module-id: unique-id();:export {className: $current-module-id;}"+source.replace(".module", ".#{$current-module-id}");
    console.log(res);
    return res;
};
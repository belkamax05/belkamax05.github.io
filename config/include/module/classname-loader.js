//replace .module {} by .<unique-id> and export variable as className
module.exports = function(source) {
    return "$current-module-id: unique-id();:export {className: $current-module-id;}"+source.replace(".module", ".#{$current-module-id}");
};
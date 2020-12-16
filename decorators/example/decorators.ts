export function logged(target: any, name: string, descriptor: PropertyDescriptor) {
    const fn = target[name];
    descriptor.value = function() {
        console.log(`Calling ${name}`);
        return fn.apply(this, arguments);
    };
}
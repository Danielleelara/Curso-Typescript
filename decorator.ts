//factory
function Logger(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`);
    };
}

@Logger("awesome")

class Foo {}



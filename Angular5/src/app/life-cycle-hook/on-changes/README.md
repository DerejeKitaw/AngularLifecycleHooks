## OnChanges()

    Angular calls its ngOnChanges() method whenever it detects changes to input properties of the component (or directive). 

    This example monitors the OnChanges hook.

    The ngOnChanges() method takes an `object` that maps each changed property name `to` a `SimpleChange` object holding the `current` and `previous` property values. 

    This hook iterates over the changed properties and logs them.

    The example component, OnChangesComponent, has two input properties: hero and power.
$(document).ready(function() {
    // Fetch language data and populate table
    $.ajax({
        url: 'languages.json',
        dataType: 'json',
        success: function(data) {
            var table = $('<table>');
            table.append('<tr><th>Code</th><th>Name</th></tr>');
            $.each(data, function(i, lang) {
                table.append('<tr><td>' + lang.code + '</td><td>' + lang.name + '</td></tr>');
            });
            $('#tableContainer').append(table);
        }
    });

    // Fetch IP information and populate table
    $.ajax({
        url: 'https://ipapi.co/8.8.8.8/json/',
        dataType: 'json',
        success: function(data) {
            var table = $('<table>');
            table.append('<tr><th>Property</th><th>Value</th></tr>');
            $.each(data, function(key, value) {
                table.append('<tr><td>' + key + '</td><td>' + value + '</td></tr>');
            });
            $('#ipInfo').append(table);
        }
    });

    // Fetch Pokémon information and populate table
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/pikachu/',
        dataType: 'json',
        success: function(pokemon) {
            var table = $('<table>');
            table.append('<tr><td>Name</td><td>' + pokemon.name + '</td></tr>');
            table.append('<tr><td>Type</td><td>' + pokemon.types.map(type => type.type.name).join(', ') + '</td></tr>');
            table.append('<tr><td>Abilities</td><td>' + pokemon.abilities.map(ability => ability.ability.name).join(', ') + '</td></tr>');
            $('#pokemonDetails').append(table);
        }
    });
});

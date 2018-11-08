<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

class ProfileType extends BaseType
{
    protected $attributes = [
        'name' => 'ProfileType',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int())
            ],

            'address' => [
                'type' => Type::string()
            ],

            'company' => [
                'type' => Type::string()
            ],

            'dob' => [
                'type' => Type::string()
            ],

            'ny' => [
                'type' => Type::int()
            ],

            'created_at' => [
                'type' => Type::string()
            ],

            'updated_at' => [
                'type' => Type::string()
            ],
        ];
    }
}

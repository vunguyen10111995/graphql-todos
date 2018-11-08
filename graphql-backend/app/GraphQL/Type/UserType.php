<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

class UserType extends BaseType
{
    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int())
            ],

            'name' => [
                'type' => Type::string()
            ],

            'email' => [
                'type' => Type::string()
            ],

            'created_at' => [
                'type' => Type::string()
            ],
            'updated_at' => [
                'type' => Type::string()
            ],

            'profile' => [
                'type' => GraphQL::type('Profile')
            ]
        ];
    }

    protected function resolveCreatedAtField($root, $args)
    {
        return $root->created_at->toIso8601String();
    }
}

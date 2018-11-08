<?php

namespace App\GraphQL\Query;

use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\Type;
use GraphQL;
use App\User;

class UsersQuery extends Query
{
    protected $attributes = [
        'name' => 'users',
    ];

    public function type()
    {
        return GraphQL::pagination(GraphQL::type('User'));
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()],
            'amount' => ['name' => 'amount', 'type' => Type::int()],
            'take' => ['name' => 'take', 'type' => Type::int()],
            'page' => ['name' => 'page', 'type' => Type::int()]
        ];
    }

    /**
     * @param $root
     * @param $args
     * @return mixed
     */
    public function resolve($root, $args)
    {
        $user = new User;

        if(isset($args['amount'])) {
            $user = $user->limit($args['amount'])->latest();
        }

        if (isset($args['name'])) {
            $user = $user->where('name', $args['name']);
        }

        if (isset($args['id'])) {
            $user = $user->where('id', $args['id']);
        }

        $perPage = $args['take'] ?? 20;

        $page = $args['page'] ?? 1;

        return $user->paginate($perPage, ['*'], 'page', $page);
    }
}
